import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iCreateSchedule } from "../../interfaces";



export const createScheduleService = async(dataSchedule:iCreateSchedule, userId:number):Promise<void>=>{

    const realEstateRepository:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const scheduleRepository:Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const userRepository:Repository<User> = AppDataSource.getRepository(User)


    const existingSchedule = await scheduleRepository.createQueryBuilder("schedule")
    .where("schedule.realEstateId = :realEstateId", { realEstateId: dataSchedule.realEstateId })
    .andWhere("schedule.date = :date", { date: dataSchedule.date })
    .andWhere("schedule.hour = :hour", { hour: dataSchedule.hour })
    .getOne();
    
    
    if(existingSchedule) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409);
    }
    
   const dateSchedules = new Date (dataSchedule.date)
   const day =(dateSchedules.getDay())
    
   if(day ===0 || day===6){
        throw new AppError("Invalid date, work days are monday to friday",400)
    }
    
    const realEstate:RealEstate | null = await realEstateRepository.findOneBy({
        id:Number(dataSchedule.realEstateId)
    })
    
    if(!realEstate){
        throw new AppError("RealEstate not found",404)
    }
    
    const user: User | null = await userRepository.findOneBy({
        id:Number(userId)
    })

    if(dataSchedule.hour<"08:00" || dataSchedule.hour>"18:00"){
        throw new AppError("Invalid hour, available times are 8AM to 18PM",400)
    }

    const scheduleCreate:Schedule | null = scheduleRepository.create({
        ...dataSchedule,
        realEstate:realEstate,
        user:user!      
    })
    
    const scheduleFindOneBy = await scheduleRepository.findOneBy({
            date:dataSchedule.date,
            hour:dataSchedule.hour
    })

    if(scheduleFindOneBy){
        throw new AppError("User schedule to this real estate at this date and time already exists",409)
    }
   
    await scheduleRepository.save(scheduleCreate)


    return 
}