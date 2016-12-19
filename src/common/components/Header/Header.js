import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header id='main_link'>
  			<p className='left_side_header'>DECOR AUCTION</p>
  			<section className='right_side_header'>
  				<p className='email_text'>
  					If you have any questions, we waiting for your letters:
  					<span className='email_address'>decorauction@mail.ru</span>
  				</p>
  				<section className='cabinetMenu'>
  					<a href="#openModalRegister" name="modal">Registration</a>
  					<p>|</p>
  					<a href="#openModalEnter" name="modal">Login</a>
  				</section>
  			</section>
  			{/* <LoginModal />
  			<RegistrationForm /> */}
  		</header>
    );
  }
}
