import { Box } from "@mui/material";
import background_animated from "../assets/animated.mp4"

export const Animated_background = () => {
    return(


        <Box>

            <video
            autoPlay
            loop
            muted
            playsInline
            style={{
                position:"absolute",
                top: 65,
                left:0,
                width: '100%',
                height: '100%',
                borderRadius:"0%",
                objectFit: 'cover',
                zIndex: 0               
                
            }}
          >
            <source
              src= {background_animated}
              type="video/mp4"
            />
          </video>

        </Box>

    );
}