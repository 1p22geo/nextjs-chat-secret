import DisabledMessageSendForm from "@/components/new_message/disabled";
import MessageSendForm from "@/components/new_message/enabled";

const UserDashboardPage = (props:{params:{lang:string}}) => {

    return ( 
        
            <>
                
                <DisabledMessageSendForm lang={props.params.lang} />
            </>
        
    );
}
 
export default UserDashboardPage;