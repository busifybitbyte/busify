import {Typography, styled, Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip/Chip';
import busIcon from '../../../assets/bus-icon.svg';
import arrowIcon from '../../../assets/arrowIcon.svg';
import scheduleIcon from '../../../assets/schedule-icon.svg';

export default function RecentOrderCard() {
  const Icon = styled('img')`
    @media (min-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
    @media (min-width: 300px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  `;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: {sm: '1rem'},
        my: '1rem',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        width: {xs: '96%', sm: '100%'},
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: {xs: '.5rem', md: '1rem'},
          alignItems: 'center',
          width: '100%',
          paddingX: '1rem',
          marginX: '3rem',
          marginTop: '1rem',
          marginBottom: {xs: '1rem', md: '0rem'},
        }}
      >
        <Chip
          sx={{
            fontSize: {xs: '.6rem', sm: '.7em'},
            color: 'white',
            backgroundColor: 'black',
          }}
          size="small"
          label="order_M1m6RTTJ9mqpVY"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '.3rem',
            alignItems: 'center',
          }}
        >
          <Typography
            component="div"
            fontSize={{xs: '.8rem', sm: '.8rem', md: '1rem'}}
            fontWeight="bold"
          >
            By
          </Typography>
          <Typography
            component="div"
            fontSize={{xs: '.8rem', sm: '.8rem', md: '1rem'}}
          >
            Neyati
          </Typography>
        </Box>

        <Typography
          component="div"
          fontSize={{xs: '.6rem', sm: '.8rem', md: '1rem'}}
          fontWeight="bold"
          color="rgba(0, 0, 0, 0.4)"
          sx={{marginRight: '0px'}}
        >
          2min ago
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <CardContent sx={{flex: '1 0 auto'}}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: {sm: 'row', xs: 'column'},
                  gap: '.8rem',
                  alignItems: {lg: 'center'},
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'row'},
                    gap: '.2rem',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.2rem',
                    }}
                  >
                    <Icon src={busIcon} alt="Bus Icon" />
                    <Typography
                      component="div"
                      fontSize={{xs: '.9rem', sm: '1rem', lg: '1.1rem'}}
                    >
                      Rewa Residency
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '.2rem',
                    }}
                  >
                    <Icon src={arrowIcon} alt="Arrow Icon" />
                    <Typography
                      component="div"
                      fontSize={{xs: '.9rem', sm: '1rem', lg: '1.1rem'}}
                    >
                      Sadar
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  component="div"
                  mx={{md: '0rem', lg: '1rem'}}
                  fontWeight="bold"
                  color="rgba(0, 0, 0, 0.4)"
                  fontSize={{sm: '1rem', xs: '0rem'}}
                >
                  |
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '.2rem',
                    alignItems: 'center',
                  }}
                >
                  <Icon src={scheduleIcon} alt="Schedule Icon" />
                  <Typography
                    component="div"
                    fontSize={{xs: '.9rem', sm: '1rem', lg: '1.1rem'}}
                  >
                    12 May, 3:00 Pm
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mr: '.8rem',
            ml: '0rem',
            mb: '1.3rem',
          }}
        >
          <Typography
            component="div"
            sx={{fontWeight: 'bold'}}
            fontSize={{xs: '1.8rem', sm: '2rem', md: '2.2rem', lg: '2.3rem'}} //        fontSize={{xs:"1.8rem", md: "2.2rem", lg: "2.3rem" }}
          >
            &#x20B9; 75
          </Typography>
          <Chip
            label="View Details"
            size="small"
            variant="outlined"
            sx={{fontSize: {xs: '.65rem', md: '.7rem', lg: '.8rem'}}}
          />
        </Box>
      </Box>
    </Card>
  );
}
