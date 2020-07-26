import React from 'react';
import {Title, Form,Repository} from './style';
import {FiChevronRight} from 'react-icons/fi';
import Layout from '../../assets/Layout.svg';
const Dashbord:React.FC = () => {
     return(
          <>
               <img src={Layout} alt='Layout'/>
               <Title> Explorando Repositorios do GitHub</Title>
               <Form>
                    <input placeholder="Digite o repositorio"></input>
                    <button type="submit" >Pesquisar</button>
               </Form>
               <Repository>
                    <a href='teste'>
                         <img src ='https://avatars0.githubusercontent.com/u/1413266?s=460&
                              u=3d618c9234937782347fa3bcb77a1f9067540ff0&v=4' alt = 'Alguma coisa'>
                         </img>
                         <div>
                              <strong>jgneff/epd-javafx</strong>
                              <p>JavaFX on E-Paper</p>
                         </div>
                         <FiChevronRight size={20}>

                         </FiChevronRight>
                    </a>
                    <a href='teste'>
                         <img src ='https://avatars0.githubusercontent.com/u/1413266?s=460&
                              u=3d618c9234937782347fa3bcb77a1f9067540ff0&v=4' alt = 'Alguma coisa'>
                         </img>
                         <div>
                              <strong>jgneff/epd-javafx</strong>
                              <p>JavaFX on E-Paper</p>
                         </div>
                         <FiChevronRight size={20}>

                         </FiChevronRight>
                    </a>
                    <a href='teste'>
                         <img src ='https://avatars0.githubusercontent.com/u/1413266?s=460&
                              u=3d618c9234937782347fa3bcb77a1f9067540ff0&v=4' alt = 'Alguma coisa'>
                         </img>
                         <div>
                              <strong>jgneff/epd-javafx</strong>
                              <p>JavaFX on E-Paper</p>
                         </div>
                         <FiChevronRight size={20}>

                         </FiChevronRight>
                    </a>
               </Repository>
          </>
     ) ;
}

export default Dashbord;