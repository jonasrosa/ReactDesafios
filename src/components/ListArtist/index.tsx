import { useQuery } from 'urql';
import {BoxList, ErrorMessage,LegendErrorMessage, LabelErrorMessage,List,
    CarLabelNameArtist, LabelNameArtist
} from './styleList'
import searchIcon from '../../assets/searchIcon.svg'
interface Props{
    nameArtist:string
}

interface ResponseType { artists: { name: string, image: string } }



const ListAtrtist=({nameArtist}:Props)=>{

    const GetArtist= `
    query{
        queryArtists(byName:"${nameArtist}"){
            name
            image
        }
    }
    
    `
    
    
    const [result,executeQuery]=useQuery<any, Array<ResponseType>>({
        query:GetArtist
    })

    const {data, fetching, error}= result
    if(fetching) return <p>Loading..</p>
    if(error) return<ErrorMessage>
                <img src={searchIcon}/>
            <LegendErrorMessage> Nenhum artista encontrado :</LegendErrorMessage>
            <LabelErrorMessage>Digite um nome de artista no campo de busca</LabelErrorMessage>

        </ErrorMessage>
    
   
    return(
        <div>
            <BoxList>
               
               {data.queryArtists.map((artist:any)=>(
                   <List>
                       <div><img src={artist.image} width="50" 
                                height="50"/></div>
                       <CarLabelNameArtist>

                       <LabelNameArtist>{artist.name}</LabelNameArtist>
                       </CarLabelNameArtist>
                    </List>

               ))}
               
            </BoxList>
        </div>
    )
} 
export default ListAtrtist
