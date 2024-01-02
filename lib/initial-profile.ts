import { currentUser ,redirectToSignIn} from "@clerk/nextjs/server";

import { db } from "@/lib/db";

const initialProfile = async() => {
    const user= await currentUser();
    
    //if we are not logged in ,then just redirect to sign in//
    if(!user){
        return redirectToSignIn();
    }


    //finding the profile model//
    const profile= await db.profile.findUnique({
       where:{
        userId:user.id
       }
    });

    if(profile){
        return profile
    }

    const newProfile=await db.profile.create({
        data:{
            userId:user.id,
            name :`${user.firstName} ${user.lastName}`,
            imageUrl:user.imageUrl,
            email:user.emailAddresses[0].emailAddress
        }
     
    });

   return newProfile;
}
 
export default initialProfile;