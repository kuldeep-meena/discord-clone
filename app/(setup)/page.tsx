import initialProfile from "@/lib/initial-profile";
import { db } from "@/lib/db";
//import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation";
import {InitialModal} from "@/components/modals/initial-modal";
const SetupPage = async() => {
    const profile=await initialProfile();
    //now we are going to attempt to find any server for that this profile is a member of//
      const server=await db.server.findFirst({
         
        where:{
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }

      })
      if(server){
        return redirect(`/servers/${server.id}`);
      }

      //if there is no server for given profile//
      return <InitialModal/>
}
 
export default SetupPage;
