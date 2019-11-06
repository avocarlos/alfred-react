import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { Languages } from '../../i18n';
import useLanguage from '../../hooks/useLanguage';

import logoSrc from './logo.jpeg';

const useStyles = makeStyles({
  container: {
    height: '100vh'
  },
  start: {
    minHeight: '38px'
  }
});

const languages = [{
  id: Languages.ES,
  name: 'Español',
  title: 'Bienvenido',
  subtitle: 'Selecciona tu lenguaje preferido',
  start: 'Comenzar'
}, {
  id: Languages.US,
  name: 'English',
  title: 'Welcome',
  subtitle: 'Select your preferred language',
  start: 'Start'
}, {
  id: Languages.ZH,
  name: '中文',
  title: '欢迎',
  subtitle: '选择您喜欢的语言',
  start: '开始'
}];

const WelcomeScreen = () => {
  const classes = useStyles();
  const [languageIdx, setLanguageIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeInDisabled, setFadeInDisabled] = useState(false);
  const {setSelectedLanguage} = useLanguage();

  const locale = languages[languageIdx];

  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout;
    let languageTimeout: NodeJS.Timeout;
    
    if (!fadeInDisabled) {
      fadeTimeout = setTimeout(() => setFadeIn(!fadeIn), fadeIn ? 4000 : 750);

      if (!fadeIn) {
        languageTimeout = setTimeout(() => {
          setLanguageIdx((prevState) => {
            return (prevState + 1 < languages.length ? prevState + 1 : 0);
          });
        }, 500)
      }
    }

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(languageTimeout);
    };
  }, [fadeIn, fadeInDisabled]);

  function selectLanguage(idx: number) {
    setFadeIn(true);
    setLanguageIdx(idx);
    setFadeInDisabled(true)
  }

  function goToHomeScreen() {
    setSelectedLanguage(locale.id);
    localStorage.setItem('setUp', '1');
  }

  function renderLanguageButtons() {
    return languages.map(({id, name}, idx) => (
      <Grid key={id} item xs={4}>
        <Button 
          onClick={() => selectLanguage(idx)} 
          variant="outlined" 
          color={fadeInDisabled && locale.id === id ? 'secondary' : 'default'} 
          fullWidth
        >
          {name}
        </Button>
      </Grid>
    ))
  }

  return (
    <Grid 
      container 
      classes={{container: classes.container}} 
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Grid item>
        <img src={logoSrc} width="120px"/>
      </Grid>
      <Grid item>
        <Fade in={fadeIn}>
          <div>
            <Typography variant="h2" gutterBottom align="center">{locale.title}</Typography>
            <Typography variant="body1" color="textSecondary" paragraph align="center">
              {locale.subtitle}
            </Typography>
          </div>
        </Fade>
        <Grid container spacing={2}>
          { renderLanguageButtons() }
        </Grid>
      </Grid>
      <Grid item classes={{item: classes.start}}>
        {fadeInDisabled && (
          <Button
            onClick={goToHomeScreen}
            endIcon={<ArrowForwardIosIcon />} 
            color="secondary" 
            variant="contained"
          >
            {locale.start}
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default WelcomeScreen;