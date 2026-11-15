import Config from "@/config";
import { Metadata } from "next";

import { RequiredBadge } from "../components/Form/Badge/Badge";

export const metadata: Metadata = {
    title: "お問い合わせ",
    alternates: {
        canonical: "/contact/"
    },
    openGraph: {
        type: "article",
        title: "お問い合わせ",
        siteName: Config.site.title,
        images: ["/ogp.png"]
    }
}

export default function ContactIndex() {
    const formAction: string = Config.contact.hyperform_api;

    const formCategory: string[] = Config.contact.category;

    return (
        <>
            <main>
                <section id="contact">
                    <div className="container">
                        <h2>お問い合わせ</h2>

                        <form action={formAction} method="post">
                            <input type="text" name="contact__hpc__check" className="form_hidden" />

                            <div className="form_box">
                                <label htmlFor="companyName" className="form_label">会社名</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    autoComplete="organization"
                                    id="companyName"
                                    className="form_control"
                                />
                            </div>

                            <div className="form_box">
                                <label htmlFor="name" className="form_label"><RequiredBadge />お名前(ご担当者様名)</label>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    required
                                    id="name"
                                    className="form_control"
                                />
                            </div>

                            <div className="form_box">
                                <label htmlFor="email" className="form_label"><RequiredBadge />メールアドレス</label>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="work email"
                                    required
                                    id="email"
                                    className="form_control"
                                />
                            </div>

                            <div className="form_box">
                                <label htmlFor="telNumber" className="form_label">電話番号</label>
                                <input
                                    type="tel"
                                    name="telNumber"
                                    autoComplete="work tel"
                                    id="telNumber"
                                    className="form_control"
                                />
                            </div>

                            <div className="form_box">
                                <span className="form_label"><RequiredBadge />お問い合わせ項目</span>
                                {formCategory.map((categoryValue, index) => {
                                    return (
                                        <div key={index} className="form_radio">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={categoryValue}
                                                required={index === 0}
                                                id={`category_${index}`}
                                                className="form_control"
                                            />
                                            <label htmlFor={`category_${index}`} className="form_label">{categoryValue}</label>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="form_box">
                                <label htmlFor="message" className="form_label">お問い合わせ内容詳細</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form_textarea"
                                />
                            </div>

                            <div className="form_button_box">
                                <input type="submit" value="送信" className="btn_primary" />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}