import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: #20212C;

    label {
        display: block;
        position: relative;
        padding-left: 35px;
        cursor: pointer;
        font-size: 1.125rem;
        color: white;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    label input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background: white;
        border-radius: 2px;
        transition: all ease .3s;
    }

    label:hover input ~ .checkmark {
        background: #CCC;
    }

    label input:checked ~ .checkmark {
        background: #17181F;
    }

    label .checkmark:after {
        content: "";
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    label input:checked ~ .checkmark:after {
        display: block;
    }
`));

export const Area = styled.div `
    margin-left: auto;
    margin-right: 0;
`;