import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { formSchema } from '../../Validations/FormValidation'
 
const ContactForm = () => {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ formError, setFormError ] = useState(false);

    const CONTACT_MUTATION = gql`
        mutation CreateFormSubmissionMutation($clientMutationId: String!, $firstName: String!, $lastName: String!, $email: String!, $phone: String!, $message: String!){
            createFormSubmission(input: {clientMutationId: $clientMutationId, firstName: $firstName, lastName: $lastName, message: $message, phone: $phone, email: $email}) {
            success
            data
            }
        }`;
    
    const [mutateFunction, {data, loading, error}] = useMutation(CONTACT_MUTATION);    
    
    function resetFormFields(){
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setMessage('');
    }

    async function validateForm(){
        let formData= {
            firstName : firstName,
            lastName : lastName,
            phone : phone,
            email: email,
            message: message
        }
        const isValid = await formSchema.isValid(formData);

        if(!isValid){
            setFormError('Please check the form fields')
        }else{
            setFormError(false)
        }

        return isValid;
    }
    async function handleFormSubmit(e, createFormSubmission){
        e.preventDefault();
        console.log('validateForm', validateForm());
        validateForm().then((valid) => {
            if(valid){
                mutateFunction({
                    variables:{
                        clientMutationId: firstName+lastName,
                        firstName : firstName,
                        lastName : lastName,
                        phone : phone,
                        email: email,
                        message: message
                    }
                })
                setFormError('Thank you! Our staff will contact you shortly.');
                resetFormFields();
            } 
        })
    }

    return (
        <section className="contact-form container">
            <h2 className="title-xxl contact-form__title">get in touch</h2>
            {/* <Mutation mutation={CONTACT_MUTATION}>
                {(createFormSubmission, { loading, error, data }) => ( */}
                    <>
                    <form className="form-contact" onSubmit={(e) => handleFormSubmit(e)}>

                    <div className="form-input form-input--50">
                        <input type="text" name="firstName" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="form-input form-input--50">
                        <input type="text" name="lastName" placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className="form-input form-input--50">
                        <input type="text" name="phone" placeholder="Your phone" value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className="form-input form-input--50">
                        <input type="text" name="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-input form-input--100">
                        
                        <textarea
                        value={message}
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Your message"
                        onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="form-input form-input--100 text-center">
                        <input type="submit" className="button button--pink" value="Submit"  />
                    </div>
                    </form>
                    { setFormError && <p style={{ color:'#eb2466', fontSize:'14px', padding:'30px 15px', textAlign:'center' }}>{ formError }</p>}
                    {/* <div style={{ padding: '20px' }}>
                        {loading && <p>Loading...</p>}
                        {error && (
                        <p>An unknown error has occured, please try again later...</p>
                        )}
                        {data && <p>form submitted</p>}
                    </div> */}
                    </>
                {/* )}
            </Mutation> */}


            <div className="contact-form__map">
                <div id="map">
                    <iframe
                    scrolling="no"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=19.703979492187504%2C41.76106872528616%2C23.236083984375004%2C43.13105676219155&amp;layer=mapnik&amp;marker=42.447848451516954%2C21.47003173828125"
                    style={{ border: '1px solid black' }}
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
