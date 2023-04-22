import React, {FC} from 'react';
// own modules
import {IMeta} from "@/components/seo/meta/meta.interface";
import Head from "next/head";

type TValueOf<T> = T[keyof T];

const getTitle = (title: TValueOf<Pick<IMeta, "title">>) => `${title} | ${process.env.NEXT_PUBLIC_TITLE_APP}`

const Meta: FC<IMeta> = ({title, description}) => {
    return (
        <Head>
            <title>{getTitle(title)}</title>

            {description ? (
                <>
                    <meta name="description" content={getTitle(description)} />
                    <meta name="og:title" content={getTitle(description)} />
                    <meta name="og:description" content={description} />
                </>
            ) : (
                <meta name="robots" content="noindex, nofollow" />
            )}
        </Head>
    );
};

export default Meta;