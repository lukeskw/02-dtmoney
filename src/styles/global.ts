import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;

        --red: #E52E40;
        
        --blue: #5429CC;
        --blue-light: #6933FF;

        --green: #33CC95;
        
        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #FFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px (padrão ideal para DESKTOP)
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
        // 1 rem = 1x o font size, se FS = 16px, 1REM = 16px...
        //usar o % melhora e muito a ACESSIBILIDADE
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        //por padrão o textarea, o input e o button não importam a fonte do body.
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-content {
        width: 100%;
        max-width: 575px;

        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: .5rem;
        outline: 0;
    }
    
    .react-modal-overlay {
        background: rgba(0,0,0,.3);
        
        position: fixed;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        outline: 0;
        display: flex;
    
        align-items: center;
        justify-content: center;
    }

    button.close-modal {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        
        transition: all .5s;
       
        &:hover {
            filter: brightness(.8);
       }
    }
    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 500ms ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
 
}

.ReactModal__Overlay--before-close {
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  
}
`