<script>
	let name = '';
	let email = '';
	let message = '';
  
	const handleSubmit = async () => {
	  const formData = { name, email, message };
  
	  try {
		const response = await fetch('http://localhost:3001/submit', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(formData)
		});
  
		const data = await response.json();
		console.log('Success:', data);
		// Optionally, you can reset the form after successful submission
		name = '';
		email = '';
		message = '';
	  } catch (error) {
		console.error('Error:', error);
	  }
	};
  </script>
  
  <style>
	/* Add your styles here */
  </style>
  
  <h1>Contact Us</h1>
  
  <form on:submit|preventDefault={handleSubmit}>
	<label for="name">Name:</label>
	<input type="text" id="name" bind:value={name} required><br><br>
  
	<label for="email">Email:</label>
	<input type="email" id="email" bind:value={email} required><br><br>
  
	<label for="message">Message:</label><br>
	<textarea id="message" bind:value={message} required></textarea><br><br>
  
	<button type="submit">Submit</button>
  </form>
  