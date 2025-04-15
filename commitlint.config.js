export default {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^([\u{1F300}-\u{1F9FF}|[\u{2600}-\u{26FF}])(Feat|Fix|Chore|Style|Docs|Refactor):\s(.+?)(?:\s+\(#\d+\))?$/u,
      headerCorrespondence: ['emoji', 'type', 'subject'],
    },
  },
  rules: {
    'type-enum': [2, 'always', ['Feat', 'Fix', 'Chore', 'Style', 'Docs', 'Refactor']],
    'type-case': [2, 'always', 'pascal-case'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'references-empty': [2, 'never'],
    'header-max-length': [2, 'always', 100],
  },
};
