import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';

export const Contact = () => {
    // Detalhes iniciais do formulário
    const formInitialDetails = {
        // listando todos os campos que teremos em branco mas estarão vazios
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }  

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    // Quando o usuário pressionar o botão, será atualizadopara enviar 
    const [buttonText, setButtonText] = useState('Enviar'); 
    //para que ele saiba que quando realizaou a ação a API foi realmente chamada
    const [status, setStatus] = useState({});

    // Atualizndo o estado detalhe do formulário 
    const onFormUpdate = (category, value) => {
        setFormDetails({
            // Atualiza apenas o campo que indicamos deixando o resto intacto 
            ...formDetails, 
            [category]: value
        })
    }

    // Como é uma solicitação para API tem que ser assíncrona
    const handleSubmit = async (e) => {
        // A página não vai ser recarregada quando o usuário enviar um formulário
        e.preventDefault();
        setButtonText('Enviando...');
        let result = await fetch("http://localhost:5000/contact",{
            method: "POST",
            headers: {
                "Content-Type": "Application/json;Charset=utf-8",
            },  // O formDetails são os nossos objetos
            body: JSON.stringify(formDetails)
        }).then((response) => {
            return response
        });
        setButtonText("Enviar");

        // Vamos definir os detalhes do formulário de volta para o estado inicial
        setFormDetails(formInitialDetails);
        // Se o codigo de resultador for igual a 200 é sucesso
        if (result.status === 200){
            setStatus({success: true, message: 'mensagem enviada com sucesso'})
        } else {
            setStatus({ succes: false, message: 'Algo deu errado, tente novamente mais tarde.'});
          }
        };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contate-me"/>
                    </Col>
                    <Col md={6}>
                        <h2>Entrar em Contato</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Primeiro Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Último Nome" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="E-mail" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Telefone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    // Será exibida mensagem de sucesso ou de erro
                                    status.message && 
                                    <Col>
                                        {/* Se não for bem sucedido é falso com o estilo ->(app.css) danger para falso */}
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}