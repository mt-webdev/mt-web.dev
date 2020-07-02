import React from 'react'
import { Grid, Box } from 'react-raster'


export const Demo = () => {
  return (
    <Grid
      breakpoints={[0, 400, 800, 1200]}
      colspan={6}
      left={"2vw"}
      right={"2vw"}
      top={"2vw"}
      bottom={"2vw"}
      gutterX={"2vw"}
      gutterY={"2vw"}
      control
    >
      <Box cols={[6, 6, 3]}>
        <h1>Hello World!</h1>
      </Box>

      <Box cols={[6, 6, 3]}>
        <Box cols={[4, 4, 2]} left={[2, 2, 1]}>
          <h2>Stop</h2>
        </Box>
        <Box cols={[4, 4, 2]} left={[2, 2, 1]}>
          <h2>Wars!</h2>
        </Box>
      </Box>
    </Grid>
  )
}
