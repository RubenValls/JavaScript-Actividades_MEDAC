import React from 'react';

const Header = () => {
    return (
        <div class="container-fluid text-center bg-dark">
            <div class="row justify-content-center align-items-center">
                <div class="col p-2">
                    <img class="img-fluid" src='https://play-lh.googleusercontent.com/OtYGjL0DfKW7NjLNOaxN3-y8oUZpeiKdYYI1QPg-62NRLri2uVCDh_JW-8aP6vI3ww' width={100} alt='toDoLogo'></img>
                    <span class="h4 text-white"> To-Do List</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
