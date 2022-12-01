import { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("MAN");
    const [message, setMessage] = useState("");
    const [agreement, setAgreement] = useState(false);

    const [errors, setErrors] = useState({
        email: false,
        message: false
    });

    function validateEmail(email) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function onSubmit(e) {
        e.preventDefault();
        let isInvalid = {
            email: false,
            message: false
        };

        setErrors({ ...isInvalid });

        if (!email) {
            isInvalid.email = true;
        }

        if (!validateEmail(email)) {
            isInvalid.email = true;
        }

        if (!message) {
            isInvalid.message = true;
        }

        setErrors({ ...isInvalid });
    }

    return (
        <div>
            <form className="field-form" action="" onSubmit={onSubmit}>
                <h2 className="field-form__article">Обратная связь</h2>

                <div
                    className={
                        "field-form__block" + (errors.email ? " error" : "")
                    }
                    id="email"
                >
                    <div className="field-form__label">
                        <label
                            className="field-form__name required"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <span className="err-msg">
                            Email введён некорректно
                        </span>
                    </div>
                    <input
                        className="field-form__input"
                        id="Email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <legend className="field-form__name">Пол</legend>

                    <div className="field-form__radio-button">
                        <div></div>
                        <input
                            type="radio"
                            name="gender"
                            id="man"
                            value="MAN"
                            checked={gender === "MAN"}
                            onChange={e => setGender(e.target.value)}
                        />

                        <label htmlFor="man">Мужчина</label>
                    </div>
                    <div className="field-form__radio-button">
                        <div></div>
                        <input
                            type="radio"
                            name="gender"
                            id="woman"
                            value="WOMAN"
                            checked={gender === "WOMAN"}
                            onChange={e => setGender(e.target.value)}
                        />

                        <label htmlFor="woman">Женщина</label>
                    </div>
                </div>

                <div
                    className={
                        "field-form__block" + (errors.message ? " error" : "")
                    }
                    id="message"
                >
                    <div className="field-form__label">
                        <label
                            className="field-form__name required"
                            htmlFor="message"
                        >
                            Сообщение
                        </label>
                        <span className="err-msg">
                            Поле не должно быть пустым
                        </span>
                    </div>
                    <textarea
                        className="field-form__input"
                        name="message"
                        id="message"
                        rows="7"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <div className="field-form__checkmark">
                        <div></div>
                        <input
                            className="field-form__chekbox"
                            id="checkbox-1"
                            type="checkbox"
                            name="agreement"
                            checked={agreement}
                            onChange={e => setAgreement(e.target.checked)}
                        />
                        
                        <label
                            className="field-form__name"
                            htmlFor="checkbox-1"
                        >
                            Согласие на обработку данных
                        </label>
                    </div>
                </div>
                <div className="field-form__blockForButton">
                    <button className="field-form__bottom">Отправить</button>
                </div>
            </form>
        </div>
    );
}
