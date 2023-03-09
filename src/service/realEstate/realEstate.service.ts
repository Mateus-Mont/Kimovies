import { Repository } from "typeorm";
import { number } from "zod";

import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iDataCreateRealEstate, iReturnCreateRealEstate, iReturnListRealEstate } from "../../interfaces";
import { returnCreateRealEstate, returnMultipleRealEstateSchema } from "../../schemas";

export const createRealEstateService = async (dataRealEstate:iDataCreateRealEstate):Promise<iReturnCreateRealEstate>=>{

    const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)
    const addressRepository:Repository<Address>=AppDataSource.getRepository(Address)
    const categoryRepository:Repository<Category>=AppDataSource.getRepository(Category)
   
    const newAddress:Address= addressRepository.create(dataRealEstate.address)
    
    const addressFindOne = await addressRepository.findOneBy({
      street:newAddress.street,
      number:String(newAddress.number)
   });

   if(addressFindOne) {
     throw new AppError("Address already exists", 409);
   }

    const categoryFindOne:Category  | null = await categoryRepository.findOneBy({
          id:Number(dataRealEstate.categoryId)     
    })

    if(!categoryFindOne){
      throw new AppError("category not found",404)
    }
    await addressRepository.save(newAddress)

    const realEstateCreate:RealEstate=realEstateRepository.create({
        ...dataRealEstate,
        address:newAddress,
        category:categoryFindOne
       });

    await realEstateRepository.save(realEstateCreate);
    
    const realEstate:iReturnCreateRealEstate=returnCreateRealEstate.parse(realEstateCreate);

  

    return realEstate  
};

export const listRealEstateService = async ():Promise<iReturnListRealEstate>=>{

    const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)

    const realEstatesFind = await realEstateRepository.find({
       relations:{
        address:true,
        category:true
       }
        
    })

    const realEstates:iReturnListRealEstate = returnMultipleRealEstateSchema.parse(realEstatesFind)

    return realEstates
}