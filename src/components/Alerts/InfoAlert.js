import { Alert } from "@mui/material";
import React from "react";
import { INFO_COLOR } from "../../themes";

export const InfoAlert = ({ text, fill, wrapStyles, fontStyles }) => {
    return (
        <Alert
            style={{ marginBottom: 10, ...wrapStyles }}
            variant={fill}
            severity="info"
        >
            <div style={{ ...styles.text, ...fontStyles }}>{text}</div>
        </Alert>
    );
};

const styles = {
    text: {
        color: INFO_COLOR,
        fontWeight: 200,
    },
};
