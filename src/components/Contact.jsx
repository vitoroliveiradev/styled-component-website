import React from 'react'
import styled from 'styled-components';
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
    height: 90%;
    background: url("https://www.toptal.com/designers/subtlepatterns/double-bubble-outline.png");
`

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`

const FormContainer = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`

const Title = styled.h1`
    margin: 70px;
    margin-top: 0;
    @media only screen and (max-width: 480px) {
        margin: 20px;
        text-align: center;
    }
`

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        height: 50%;
        margin-right: 0;
    }
`
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        width: 50%;
        align-items: center;
    }
    
`

const Input = styled.input`
    width: 200px;    
    padding: 20px;
    @media only screen and (max-width: 480px) {
        padding: 5px;
        margin-top: 10px;
    }
`

const Textarea = styled.textarea`
    width: 200px;
    height: 60px;
    padding: 20px;
    resize: none;
    @media only screen and (max-width: 480px) {
        padding: 5px;
        margin-top: 20px;
    }
`

const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        margin-top: 0px;
        padding: 5px 0;
        width: 100%;
        font-size: 14px;
    }
`

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        margin-top: 20px;
    }
`

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`

const Icon = styled.img`
    width: 20px;
    margin-right: 12px;
    @media only screen and (max-width: 480px) {
        width: 15px;
    }
`

const Text = styled.span`
    font-size: 20px;
    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
`

export const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
                <Title>Questions <br /> Let´s Get In Touch</Title>
                <Form>
                    <LeftForm>
                        <Input placeholder='Your Name'/>
                        <Input placeholder='Your Email'/>
                        <Input placeholder='Subject'/>
                    </LeftForm>
                    <RightForm>
                        <Textarea placeholder='Your Message' />
                        <Button>send</Button>
                    </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>
                <AddressItem>
                    <Icon src={Map}/>
                    <Text>123 Park Avenue St. New York, USA</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Phone}/>
                    <Text>+1 631 1234 5678</Text>
                    <Text>+1 326 1234 5678</Text>
                    <Text></Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Send}/>
                    <Text>contact@lama.dev</Text>
                    <Text>sales@lama.dev</Text>
                </AddressItem>
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}
