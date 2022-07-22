import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
const MuiCard = () => {
  return (
    <Grid container spacing={4} p={6}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card elevation={3}>
          <CardMedia
            component="img"
            height="300"
            image="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="unsplah image"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              자유 매칭
            </Typography>
            <Typography variant="body1">원하는 시간과 장소를 선택해서 자유로운 경기를 즐기세요!</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              #자유매칭 #혼자 #같이 #누구나 #2시간
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card elevation={3}>
          <CardMedia
            component="img"
            height="400"
            image="https://images.unsplash.com/photo-1517747614396-d21a78b850e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="unsplah image"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              구장대여
            </Typography>
            <Typography variant="body1">나만의 구장에서 원하는 플레이를 즐겨봐요!</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              #구장대여 #나만의 축구장 #예약 #2시간
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card elevation={3}>
          <CardMedia
            component="img"
            height="200"
            image="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="unsplah image"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              팀 매칭
            </Typography>
            <Typography variant="body1">팀으로 경쟁하는 재미는 놓차고 싶지않습니다.</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              #팀리그 #6인 #5인 #명예의 전당
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card elevation={3}>
          <CardMedia
            component="img"
            height="140"
            image="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/233692b7018200001.jpeg?type=thumb&opt=C630x472"
            alt="unsplah image"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              화면 전환
            </Typography>
            <Typography variant="body1">다큰 버전을 즐겨보세요!</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              #눈 아파 #밝은 화면 #어두운 화면
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MuiCard;
