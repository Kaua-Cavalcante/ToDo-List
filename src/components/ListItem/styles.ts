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

    input {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`));

export const Area = styled.div `
    margin-left: auto;
    margin-right: 0;
`;