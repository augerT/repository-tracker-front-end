import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Divider
} from '@mui/material';
import ReactMarkdown from 'react-markdown';

interface Repo {
  id: number;
  name: string;
  owner: string;
  version: string;
  releaseNotes: string;
}

interface ReleaseNotesProps {
  repo: Repo | null;
}

const ReleaseNotes: React.FC<ReleaseNotesProps> = ({ repo }) => {
  if (!repo) {
    return (
      <Paper sx={{ p: 4, minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Select a repository to view release notes
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3, minHeight: '500px' }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: '#667eea' }}>
          {repo.name} Release Notes
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Version: {repo.version}
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{
        '& p': { mb: 2 },
        '& ul': { pl: 3, mb: 2 },
        '& li': { mb: 1 },
        '& strong': { fontWeight: 600 }
      }}>
        <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap' }}>
          {repo.releaseNotes}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ReleaseNotes;