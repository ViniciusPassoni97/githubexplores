import styled,{css} from 'styled-components';
import { shade } from 'polished';

interface PropsError{
     hasError:boolean;
}

export const Title = styled.h1`
     font-size:32px;
     margin-top:60px;
     max-width:450px;
     line-height:52px;
`;
 export const Form = styled.form<PropsError>`
     margin-top:40px;
     max-width:700px;
     display:flex;

     input{
          flex:1;
          height:70px;
          padding:0 24px;
          border:2px solid #fff;
          border-radius:5px 0 0 5px;
          border-right:0;
          ${(props)=>
               props.hasError && css`
                    border-color:#c33030;
               `
          }
          &::placeholder{
               color:#a8a8b5;
          }
     }
     button{
          width:210px;
          height:70px;
          border-radius:0 5px 5px 0;
          background:#04d361;
          border:0;
          color:#fff;
          font-weight:bold;
          transition: background-color 0.2s;
          &:hover{
               background:${shade(0.2 , '#04d361')};
          }
     }
 `;
 export const Repository = styled.div`
     margin-top:80px;
     max-width:700px;
     a{
          background:#fff;
          border-radius:5px;
          padding:24px;
          display:flex;
          align-items:center;
          text-decoration:none;
          transition: transform 0.2s;
          & + a {
               margin-top:20px;
          }
          &:hover{
             transform: translateX(20px);
          }
          img{
               width:64px;
               height:64px;
               border-radius:50%;
          }
          div{
               margin-left:20px;
               flex:1;
               strong{
                    font-size:20px;
                    color:#3d3d4d;
               }
               p{
                    font-size:18px;
                    color:#a8a8b3;
                    margin-top:4px;
               }
          }  
          svg{
                    margin-left:auto;
          }
     }
 `;
 export const Error = styled.span`
     display:block;
     color:#c33030;
     margin-top:30px;
 `;