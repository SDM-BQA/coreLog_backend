import nodemailer, { Transporter } from "nodemailer";
import * as env_config from "../../configs/env.config";
import { Attachment } from "nodemailer/lib/mailer";

export class Email {
    private emails: string[] = [];
    private subject: string = "";
    private body: string = "";
    private type: "html" | "text" = "text";
    private transporter: Transporter;
    private attachments: Attachment[] = [];
    private config = {
        email: env_config.email,
        password: env_config.email_password,
        service: env_config.email_service,
    };

    constructor(
        emails: string[] = [],
        subject: string = "",
        body: string = "",
        type: "html" | "text" = "text"
    ) {
        this.emails = emails;
        this.subject = subject;
        this.body = body;
        this.type = type;
        this.attachments = [];
        this.transporter = this.create_transporter();
    }

    public email = {
        clear: () => {
            this.emails = [];
        },
        add: (email: string) => {
            this.emails.push(email);
        },
        remove: (email: string) => {
            this.emails = this.emails.filter((e) => e !== email);
        },
        get: () => {
            return this.emails;
        },
    };

    public content = {
        set: {
            subject: (subject: string) => {
                this.subject = subject;
            },
            body: (body: string) => {
                this.body = body;
            },
            type: (type: "html" | "text") => {
                this.type = type;
            },
            attachments: (attachments: Attachment[]) => {
                this.attachments = attachments;
            },
        },
        get: {
            subject: () => {
                return this.subject;
            },
            body: () => {
                return this.body;
            },
            type: () => {
                return this.type;
            },
            attachments: () => {
                return this.attachments;
            },
        },
    };

    public email_config = {
        set: {
            email: (email: string) => {
                this.config.email = email;
                this.transporter = this.create_transporter();
            },
            password: (password: string) => {
                this.config.password = password;
                this.transporter = this.create_transporter();
            },
            service: (service: string) => {
                this.config.service = service;
                this.transporter = this.create_transporter();
            },
        },
        get: {
            email: () => {
                return this.config.email;
            },
            password: () => {
                return this.config.password;
            },
            service: () => {
                return this.config.service;
            },
        },
    };

    private create_transporter = () => {
        return nodemailer.createTransport({
            service: this.config.service,
            auth: {
                user: this.config.email,
                pass: this.config.password,
            },
        });
    };

    private get_config = () => {
        return {
            from: `"CoreLog" <${this.config.email}>`,
            to: this.emails?.join(","),
            subject: this.subject,
            attachments: this.attachments,
            [this.type]: this.body,
        };
    };

    public async send(): Promise<boolean> {
        const mailConfig = this.get_config();
        try {
            const info = await this.transporter.sendMail(mailConfig);
            console.log("Email sent:", info.messageId);
            return true;
        } catch (error) {
            console.error("Failed to send email:", error);
            return false;
        }
    }
}
