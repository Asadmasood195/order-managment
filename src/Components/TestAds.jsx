import React, { Component } from "react"
import { render } from "react-dom"


class BasicAd extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

    render() {
        return (
            <ins
                className="adsbygoogle"
                data-ad-client="ca-pub-4591861188995436"
                data-ad-slot="4640466102"
                style={{ display: "inline-block", height: 250, width: 300 }}
            />
        )
    }
}

export const TestAd = () => (

    <BasicAd />


)

render(<TestAd />, document.getElementById("root"))
