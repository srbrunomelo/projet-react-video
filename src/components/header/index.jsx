import React from 'react';

export default function Header(props) {
    return (
        <>
            <div className="container-fluid bg-primary text-white">
                <div className="row">
                    <div className="col-lg-12 text-center p-5">
                    <h1>{props.title}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}