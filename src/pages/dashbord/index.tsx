import React,{useState,FormEvent} from 'react';
import api from '../../services/api';
import {Title, Form,Repository,Error} from './style';
import {FiChevronRight} from 'react-icons/fi';
import Layout from '../../assets/Layout.svg';
interface Repositorys{
     full_name:string;
     description:string;
     owner:{
          login:string;
          avatar_url:string;
     };
}

const Dashbord:React.FC = () => {
     const [newRepo,setNewRepo] = useState('');
     const [inputError, setInputError] = useState('');
     const [repositores, setRepositores] = useState<Repositorys[]>([]);
     async function addRepositores(event:FormEvent<HTMLFormElement>):Promise<void>{
          event.preventDefault();
          if(!newRepo){
               setInputError('Digite algum nome do repositorio !');
               return;
          }
          try{
               const response = await api.get(`repos/${newRepo}`);
               const repositore = response.data;
               setRepositores([...repositores, repositore]);
               setNewRepo(''); 
               setInputError('');
          }catch(err){
               setInputError('Erro ao buscar repositorio !');
          }
     }
     return(
          <>
               <img src={Layout} alt='Layout'/>
               <Title> Explorando Repositorios do GitHub</Title>
               <Form hasError = {!! inputError} onSubmit={addRepositores}>
                    <input 
                    value={newRepo}
                    onChange={(e)=>setNewRepo(e.target.value)}
                    placeholder="Digite o repositorio">
                    </input>
                    <button type="submit" >Pesquisar</button>
               </Form>
               {inputError && <Error>{inputError}</Error>}
               <Repository>
                    {repositores.map(e=>(
                         <a key={e.full_name} href='teste'>
                              <img src ={e.owner.avatar_url} alt = {e.owner.login} >
                              </img>
                              <div>
                                   <strong>{e.full_name}</strong>
                                   <p>{e.description}</p>
                              </div>
                              <FiChevronRight size={20}>
                              </FiChevronRight>
                         </a>
                    ))}
               </Repository>
          </>
     ) ;
}

export default Dashbord;