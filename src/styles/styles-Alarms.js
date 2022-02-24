import styled from 'styled-components'

const FloatButtonStyled = styled.button`
    border-radius: 50%;
    border: none;
    background-color: #fff;
    color: #0000ff;
    box-shadow: 5px 5px 50px -6px #828282;
    width: 60px;
    height: 60px;

    position: fixed;
    top: calc(100% - 60px - 2rem);
    left: calc(100% - 60px - 2rem);

    &:hover{
        cursor: pointer;
    }

    @media (min-width: 768px){
        top: calc(100% - 60px - 6rem);
        left: calc(100% - 60px - 6rem);
    }
`
const AlarmsStyled = styled.div`
    display: flex;
    flex-direction: column;

`

const AlarmStyled = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    margin: 15px 0;
    cursor: pointer;

    &:last-child {
        margin-bottom: 150px;
    }

    @media(min-width: 768px) {
        width: 40vw;
        margin: 20px 0;

        &:last-child {
            margin-bottom: 20px;
        }
      }      
`

const InfoStyled = styled.div`
     

    & b {
        font-size: 1.5em;
    }

    & small{
        font-size: 0.8em;
      }
    
      & p {
          margin: 5px 0 ;
      }
    
`

const ToggleStyled = styled.div`
    place-self: center;

    &:hover {
        cursor: pointer
    }
`

const NavStyled = styled.nav`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(255, 255, 255, 1);
    padding-top: 12px;

    @media(min-width: 768px){
       padding-top: 10px
    }
`

const ModalStyled = styled.div`
    z-index: 1000;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
`

const ContentModalStyled = styled.div`
    background-color: #fff;
    width: calc(100% - 4em);
    height: calc(90% - 6em);
    margin: 3em auto;
    border-radius: 10px;
    padding: 10px 10px;
    z-index:1000;


    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -57%);

    @media only screen and (min-width: 768px){
        width:  calc(50% - 4em);
        height 450px;
        padding: 35px 40px;
    }
`

const HeadStyled = styled.div`
    display:flex;
    justify-content: space-between;
    text-align:center;

    &>svg{
        cursor:pointer;
    }
    & > div p{
        margin: 0;
    }

    &> small {
        display:block
    }
`

const OptionsStyled = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    margin: 20px 0;

    & > *{
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
    }
`

const AditionalOpStyled = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    margin: 20px 0;

    & > *{
        margin: 0;
        margin-bottom:10px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;

        @media only screen and (min-width: 768px){
            padding:  0;
        }
        
    }

    & h4 {
        place-self:center;
    }
`

const SelectorStyled = styled.div`
    height:30px;
    overflow: hidden;
    width: 129px;
    position:relative;
    color:grey;
    border: none;
 
 & > select {
    background: transparent;
    border: none;
    font-size: 14px;
    color:grey;
 }

  & > select:focus{ outline: none;}

  &::after{
    content:"ᐳ";
    display:table-cell;
    text-align:center;
    width:30px;
    height:30px;
    background-color:transparent;
    position:absolute;
    top:0;
    right:0px; 
    pointer-events: none;
}
`

const ClockStyled = styled.div`
    position:relative;
    left: 0%;
    top:0%;

    font-size:4em;
    text-transform:uppercase;
    margin:20px auto;
    width:max-content;

    @media only screen and (min-width: 768px){
        padding: 0;
        
        &>div{
            cursor:pointer;
        }
    }

    &>div{
        margin: 0 10px 0 0;
        display:inline;
    }

    & > *::after{
        content:"";
        display:inline-block;
        width:1px;
        height:1em;
        background-color:#161616;
        position: relative;
        top:0;
        left:5px;
        opacity: 15%;
        cursor:auto;
    }


    & > *:nth-child(3):after{
        display:none;
    }

`

const TrashAlarm = styled.div`
    display:inline;
    min-width:358px;
    height:100px;
    border: 1px dashed #999;
    text-align:center;
    font-size:1.2em;
    position: fixed;
    top: calc(99% - 60px - 2rem);
    left: 0;
    
    @media (min-width: 768px){
        min-width:500px;
        top: calc(100% - 60px - 6rem);
        left: calc(50% - 60px - 6rem);
    }
    &>*{
        margin-top: 30px
    }

` 

const LabelAlarmStyled = styled.input`
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #0000ff;
    outline: none;
`

const ButtonStyled = styled.button`
    padding: 10px 20px;
    background-color: transparent;
    border: 1px solid #0000ff;
    color #0000ff;
    cursor:pointer;
    border-radius: 10px;
    font-size:1em;
    flex-basis: 49.5%;
`
const ButtonsParent = styled.div`
    display:flex;
    justify-content:space-between;
    padding:0 20px;

    @media only screen and (min-width: 768px){
        padding:  0;
    }

`

const HeaderStyled = styled.h4`
    font-size: 1.5em;
    text-transform: uppercase;
    margin: 0 0 20px 0;
    text-align:center;
`
const TrashButton = styled.button`
    padding: 10px 20px;
    background-color: transparent;
    border: 1px solid #ff0000;
    color #ff0000;
    cursor:pointer;
    border-radius: 10px;
    font-size:1em;
    

`

const TrashParent = styled.div`
    text-align:end;
    margin-top: -15px;
`

export {
  FloatButtonStyled,
  AlarmsStyled,
  AlarmStyled,
  InfoStyled,
  ToggleStyled,
  NavStyled,
  ModalStyled,
  ContentModalStyled,
  HeadStyled,
  OptionsStyled,
  AditionalOpStyled,
  SelectorStyled,
  ClockStyled,
  TrashAlarm,
  LabelAlarmStyled,
  ButtonStyled,
  ButtonsParent,
  HeaderStyled,
  TrashButton,
  TrashParent,
}
