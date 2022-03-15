import React from "react";
import './style.scss';
import {userI} from "../../types";

const User = (userInfo: userI) => {
    return (
        <div className="user-card">
            <span className="user-card__name">{userInfo.name} {userInfo.lastName}</span>
            <ul className="user-card__list">
                <li className="user-card__item">
                    <span className="user-card__left">Email </span>
                    <span className="user-card__right">{userInfo.email}</span>
                </li>
                <li className="user-card__item">
                    <span className="user-card__left">Old </span>
                    <span className="user-card__right">{userInfo.old}</span>
                </li>
                <li className="user-card__item">
                    <span className="user-card__left">Gender </span>
                    <span className="user-card__right">{userInfo.gender}</span>
                </li>
                <li className="user-card__item">
                    <span className="user-card__left">Birth date </span>
                    <span className="user-card__right">{userInfo.birthDate}</span>
                </li>
                <li className="user-card__item">
                    <span className="user-card__left">Height </span>
                    <span className="user-card__right">{userInfo.height}cm</span>
                </li>
                <li className="user-card__item">
                    <span className="user-card__left">Weight </span>
                    <span className="user-card__right">{userInfo.weight}kg</span>
                </li>
            </ul>

        </div>
    )
}

export default User;