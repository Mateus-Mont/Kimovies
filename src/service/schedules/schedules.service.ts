import { Repository } from "typeorm";
import { date } from "zod";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iCreateSchedule } from "../../interfaces";

export const createScheduleService = async(dataSchedule:iCreateSchedule, userId:number):Promise<Schedule>=>{

    const realEstateRepository:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const scheduleRepository:Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const userRepository:Repository<User> = AppDataSource.getRepository(User)
    

    const hour:Date= new Date( dataSchedule.hour)

    console.log(hour.getHours)

    if(dataSchedule.hour<"08:00" || dataSchedule.hour>"18:00"){
        throw new AppError("Invalid hour, available times are 8AM to 18PM",400)
    }

    const dateSchedules:Date = new Date (dataSchedule.date)

    const day:number = dateSchedules.getDay()

    if(day === 0 || day === 6){
        throw new AppError("Invalid date, work days are monday to friday",400)
    }

    const realEstate:RealEstate | null = await realEstateRepository.findOneBy({
            id:dataSchedule.realEstateId  
    })
    
    const existingSchedule = await scheduleRepository.createQueryBuilder("schedule")
    .where("schedule.realEstateId = :realEstateId", { realEstateId: dataSchedule.realEstateId })
    .andWhere("schedule.date = :date", { date: dataSchedule.date })
    .andWhere("schedule.hour = :hour", { hour: dataSchedule.hour })
    .getOne();

    if(existingSchedule) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409);
    }

    if(!realEstate){
        throw new AppError("RealEstate not found",404)
    }
    
    const scheduleFindOneBy = await scheduleRepository.findOneBy({
        date:dataSchedule.date,
        hour:dataSchedule.hour,
    
    })

    if(scheduleFindOneBy){
        throw new AppError("User schedule to this real estate at this date and time already exists",409)
    }

    const user: User | null = await userRepository.findOneBy({
        id:userId
    })
    
    const scheduleCreate:Schedule | null =  scheduleRepository.create({
        ...dataSchedule,
        realEstate:realEstate,
        user:user!
    })
    
    await scheduleRepository.save(scheduleCreate)

    return scheduleCreate
}

export const listPropertyAppointmentService = async (idRealEstate: number):Promise<RealEstate> => {
    
    const realEstateRepository: Repository<RealEstate> =  AppDataSource.getRepository(RealEstate)
  
    const realEstatesFind: RealEstate | null  = await realEstateRepository.findOne({
        where:{
            id:idRealEstate 
        },
        relations:{
            address:true,
            category:true,
            schedules:{
                user:true
            }
        }         
    })

    if (!realEstatesFind) {
        throw new AppError("RealEstate not found", 404)
    }
    return realEstatesFind;
}