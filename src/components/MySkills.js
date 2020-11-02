import React, { useEffect, useState } from 'react';
import { Card, CardContent, IconButton, makeStyles, Typography } from '@material-ui/core/';
import SingleLineGridList from './SingleLineGridList';
import { QuestionAnswer } from '@material-ui/icons';

import { getSkills as getSkillsService } from '../services/skills';

import { whoToAsk } from '../services/questions';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
  },
  cardContent: {
    // textAlign: 'center',
    paddingLeft: 0
  }
}));

export default function MySkills() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  const [whoCanHelp, setWhoCanHelp] = useState(null);

  const handleQuestion = async skillId => {
    const response = await whoToAsk(skillId);

    const skill = skills.find(skill => skill.id === skillId);

    if (response.success) {
      const whoCanHelp = response.whoToAsk[0];
      setWhoCanHelp({ skillName: skill.title, name: `${whoCanHelp.first_name} ${whoCanHelp.last_name}`, role: whoCanHelp.role });
    }
  };

  const parseSkills = skills => skills.map(skill => ({
    id: skill.skill_id,
    title: skill.name,
    subtitle: `Level ${skill.skill_level}`,
    img: 'https://images.unsplash.com/photo-1580894906475-403276d3942d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    icon: (
      <IconButton onClick={() => { handleQuestion(skill.skill_id) }}>
        <QuestionAnswer color="secondary" />
      </IconButton>
    )
  }));

  const getMySkills = async () => {
    const response = await getSkillsService();
    if (response.success) {
      setSkills(parseSkills(response.skills))
      setLoading(false);
    }
  };

  useEffect(() => {
    getMySkills();
  }, []);

  return (
      loading 
      ? <div>Loading</div>
      : (
        <>
          <SingleLineGridList data={skills} />
          {
            whoCanHelp ?
            (
              <Card elevation={0} className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography color="textSecondary" gutterBottom>
                    Who can help me with <strong>{whoCanHelp.skillName}</strong>:
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="h6">
                    The {whoCanHelp.role} {whoCanHelp.name}
                  </Typography>
                </CardContent>
              </Card>
            ) :
            null
          }
        </>
      )
  );
}
