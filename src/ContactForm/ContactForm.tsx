import React, { FC, useState, FormEvent } from 'react';
import Section from '../Section/Section';
import './ContactForm.scss';

interface ContactFormFields {
	// Indexer
	[index: string]: string;

	// Field values
	inputEmail: string;
	inputMessage: string;
	inputName: string;
}

interface ContactFormState {
	fields: ContactFormFields;
	submitted: boolean;
}

const initialState: ContactFormState = {
	fields: {
		inputEmail: '',
		inputMessage: '',
		inputName: ''
	},
	submitted: false
};

interface ContactFormProps {
	emailAPI: string;
	successMessage?: string;
}

const ContactForm: FC<ContactFormProps> = ({
	emailAPI,
	successMessage
}) => {
	const [state, setState] = useState(JSON.parse(JSON.stringify(initialState)));

	/** Handler for submitting the form */
	const submitForm = function(evt: FormEvent<HTMLFormElement>) {
		evt.preventDefault();

		// Reset form
		setState({
			...initialState,
			submitted: true
		});

		// Submit form to send mail
		const xhr = new XMLHttpRequest();
		xhr.addEventListener('load', () => {
			console.log(xhr.responseText);
		});
		xhr.open('POST', emailAPI);
		xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
		xhr.send(JSON.stringify(state.fields));
	}

	/** Handler for updating the form */
	const updateForm = function(evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
		let newState: ContactFormState = {...state};
		const fieldName = evt.target.name;

		if(fieldName in newState.fields) {
			newState.fields[fieldName] = evt.target.value;
		}
		setState({...state});
	}

	return (
        <>
			{/* Form */}
			{!state.submitted && (
				<form id='vs-contact-form' method='post' onSubmit={submitForm} acceptCharset='UTF-8'>
					<input type='hidden' name='form_type' value='contact' />
					<input type='hidden' name='utf8' value='✓' />

					<div className='input-group'>
						<label>Name</label>
						<input id='ContactFormName' type='text' name='inputName' placeholder='First Last' value={state.fields.inputName} onChange={updateForm} required/>
					</div>

					<div className='input-group'>
						<label>Email</label>
						<input id='ContactFormEmail' type='email' name='inputEmail' placeholder='email@example.com' value={state.fields.inputEmail} onChange={updateForm} required/>
					</div>

					<div className='input-group'>
						<label>Message</label>
						<textarea id='ContactFormMessage' rows={8} name='inputMessage' placeholder='What do you want to talk about?' value={state.fields.inputMessage} onChange={updateForm} required></textarea>
					</div>

					<input type='submit' className='vs-btn vs-btn--primary btn px-4 py-2' value='Send' />
				</form>
			)}

			{/* Success Message */}
			{state.submitted && (
				<Section>
					<h3>{successMessage || 'Thank you for your message!'}</h3>
				</Section>
			)}
        </>
	);
}


export default ContactForm;
