import { getServerSession } from "next-auth"
import Logout from '@/app/logout';

export default async function Dashboard(){
    const session = await getServerSession()
    
    return(
        <>
        <nav>
        {
            !!session && 
            <Logout/>
        }
      </nav>
      <h1>Welcome Home, {session?.user?.name}</h1>
      </>
    )

}