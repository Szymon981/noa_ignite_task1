import React, {Component} from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';
Modal.setAppElement('#root');


class Page extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({
            modalOpen: true
        });
    }

    closeModal(){
        this.setState({
            modalOpen: false
        });
    }


    render(){

        return (<div id="smoothie-container">
                    <h1>Smoothie Delight</h1>
                    <img id="smoothie-img" src="https://morningchores.com/wp-content/uploads/2017/07/88-Tasty-Smoothie-Recipes-to-Start-Your-Day-in-a-Delicious-Way-FB.jpg"/>
                    <br/>

                    <div className="separating-line"></div>

                    <h2>About</h2>
                    <img className="about-img" src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-asia.com/article/2020/07/27/data-bank-china-s-most-imported-vitamins-calcium-probiotics-q10-glucosamine-revealed/11612185-1-eng-GB/Data-bank-China-s-most-imported-vitamins-calcium-probiotics-Q10-glucosamine-revealed_wrbm_large.png"/>
                    <div className="smoothie-about">
                        <p>
                           Smoothie Delight is no preservative, premium quality drink made of fresh fruits only.
                           It is very tasty and has an original flavour. Smoothie Delight has very good affect
                           on your health, because of many vitamins. It boosts resilience and focus.
                        </p>
                    </div>

                    <img className="about-img" src="https://fashionmagazine.com/wp-content/uploads/2019/12/iStock-871070868.jpg"/>
                    <div className="smoothie-about">
                        <p>
                            When you are trying to lose weight, Smoothie Delight is a perfect match, because
                            it is low-cal. When you are building muscle mass it will help you regenerate goodness,
                            which you have lost during training.
                        </p>
                    </div>

                    <div className="separating-line"></div>

                    <div id="smoothie-flavours">
                        <h2>Every smoothie is an experience. Make it count!</h2>
                        <p>There are 5 smoothie flavours:</p>
                        <ul>
                            <li>Kiwi fruit</li>
                            <li>Multivitamin</li>
                            <li>Orange</li>
                            <li>Grapefruit</li>
                            <li>Raspberry</li>
                        </ul>
                    </div>

                    <div className="separating-line"></div>

                    <h2>If you want to be informed of product updates click here:</h2>
                    <img id="newsletter-img" onClick={this.openModal} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfRmpvXeZIWSVoDxcGkCSqmobTKHZ_gdTBQ&usqp=CAU"/>

                    <Modal
                        isOpen={this.state.modalOpen}
                        contentLabel="email-modal"
                    >
                        <img id="modal-closing-button" onClick={this.closeModal} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACrklEQVRYhcWXz05TQRTGvzM2/DEmpeLKTTvdKBgeQdBbTHwL4864JEiMhBhBQAw7H4D4ItO0iJKwJbFhQaeFAiXBEgNKQee4oIX2Zu7tvRi9Z9PkzJ/vd898Z9Kh0dEHAhFGrPEbFYSJ9OsBiKgBIit9M/yP4Pj4ByqV3StDrq9/7eq03nMwm112VlfXSoXCRk2p/LOw4krlxqrV/YNCYaOSzeYfhwLY3t4RxpiPAG4DfJ3ZfFAqNxZC/CUzFgDuAfiWMby0tVWxadlNWKvVYgBuAnyRY+YFpfLjAcVnWtcCuHF0dBSzzbcCDA3dOyXCm/YsgdnMK5WbCCkOIpoaGLhzallirqXTKQJA7hEpUyvFYgkARs6HLzbNaF2qS5laCSYuphxneNGDmT0BACCdTuW1Lv8G+GH7CLVBKJV7xYxpD/F3HuKdAQBAyuRysVg6A+A0tkVDKKN1qV4slu5fURwAqCMAAKTTqU9al84AclxCGUsuqDgAIBAAAEjZhGhWAnB5I7Q4/EzoA1HH+Zf/rTgA8FWuWWETb+RM2M1CVcCr1dzGlK4W9YlgJgwo3oyM1uW6lMlAEIGOwO+SIcKkG4jZzPrdmC3R2YRK5SaY8dbLcFKmVjyMmdG6/FPK5GcfAP+LSKncODPmOrn9HKJ8BrDj2mJU6/KxlMkvoQGUyj9nxmLQVpMy2dKiwGU1+JHW5QMpk2sWALJ6YGdnVzDzrEX8tV+fO87IeyKadBuTmeer1X2rljWZSCQMgO8u8WnHGZ7zEm+HcBsT3/r64rY7wv6fsLe3B0KIpwDtAXRKJCYdZ3imk3g7BL0A6ASgbSHEk+7ubutcaryMPI5iTxweHnYNDt49CSreGpubOtbfn/gVj8e9phhfgP8RUb8LIgeI/G148To2uKxGa7v889wffdFdDU5fhtcAAAAASUVORK5CYII="/>
                        <br/>
                        <h2>Newsletter</h2>
                        <input type="text" id="email-input" placeholder="Type your email address"/>
                        <br/>
                        <input type="submit" id="modal-email-button" value="Sign up"/>
                    </Modal>
                    <br/>

                    <div className="separating-line"></div>
        </div>);
    }
}

export default Page;
ReactDOM.render(<Page/>, document.getElementById("root"));