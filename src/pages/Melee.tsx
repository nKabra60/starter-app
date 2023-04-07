import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

const Melee: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h4">Melee</Typography>
        </Box>
    );
};

export default Melee;