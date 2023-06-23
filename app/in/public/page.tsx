import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Dialog from "@/components/warning";
import GeneralMessageFeedComponent from "@/components/message_feed";

const PublicMessagePage = async () => {
    // i'll fetch data in a client component.

    const cookie = cookies().get("skyChatSession")
    if(!cookie){
        // console.log("No cookie found! QUITTING!!!")
        redirect("/")
    }
    
    const id = cookie.value

    

    return ( 
        <>
    <div className="p-8">
    <Dialog status="loading" message="Sending message" id="sending"></Dialog>
    <Dialog status="error" message="Sending message failed" id="sendingfailed"></Dialog>
    </div>
    <GeneralMessageFeedComponent type="public" session={id} />
    </> 
    );
}
 
export default PublicMessagePage;