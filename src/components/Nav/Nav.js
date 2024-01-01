import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, useMediaQuery } from '@mui/material';

function Nav({ mainRef }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = text => {
    if (text === '앱다운') {
      alert('앱 준비중입니다');
    }

    setSelectedMenu(text); // 선택된 메뉴를 상태로 저장
    setDrawerOpen(false); // 드로어 닫기
  };

  useEffect(() => {
    // 드로어가 닫히고, 선택된 메뉴가 '소식받기'일 때 포커스를 이동
    if (!drawerOpen && selectedMenu === '소식받기' && mainRef.current) {
      mainRef.current.focus();
      setSelectedMenu(''); // 상태 초기화
    }
  }, [drawerOpen, selectedMenu, mainRef]);
  const drawer = (
    <List>
      {['앱소개', '소식받기', '앱다운'].map((text, index) => (
        <ListItem button key={text} onClick={() => handleMenuClick(text)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle} // 햄버거 아이콘 클릭 시 드로어 열기
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Typography
              variant="h6"
              style={{ flexGrow: 1, fontWeight: 'bold' }}
            >
              MOTIVE
            </Typography>
          )}
          {/* <img
          alt="Logo"
          src="/path/to/logo.svg" // 로고 이미지 경로
          width="30"
          height="30"
          style={{ marginRight: 10 }}
        /> */}
          {!isMobile &&
            ['앱소개', '소식받기', '앱다운'].map((text, index) => (
              <Typography
                key={index}
                style={{ marginRight: 30, cursor: 'pointer' }}
                onClick={() => handleMenuClick(text)}
              >
                {text}
              </Typography>
            ))}
        </Toolbar>
      </AppBar>

      {/* 드로어(메뉴 목록) */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        style={{ marginTop: '64px' }}
      >
        <div
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          {drawer}
        </div>
      </Drawer>
    </>
  );
}

export default Nav;
