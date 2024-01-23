function toggleForm() {
    var form = document.getElementById('preRegistrationForm');
    var formIntro = document.getElementById('formIntro');
  
    if (form.style.display === 'none') {
      form.style.display = 'flex';
      form.style.opacity = '1';
      formIntro.style.opacity = '0';
    } else {
      form.style.display = 'none';
      formIntro.style.opacity = '1';
    }
  }
  
  function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var bookTitle = document.getElementById('bookTitle').value;
  
    if (name.trim() === '' || email.trim() === '' || bookTitle.trim() === '') {
      alert('All fields are required.');
      return;
    }
  
    alert('Thank you for pre-registering! We will notify you when the book is available.');
  }
  