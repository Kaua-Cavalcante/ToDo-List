 import styled from 'styled-components';

 export const Container = styled.div `
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border: none;
        border-radius: 5px;
        background: transparent;
        transition: all ease .3s;
    }

    button:hover {
        background-color: rgba(20, 21, 22, 0.5);
    }
 `;