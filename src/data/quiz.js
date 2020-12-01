export default [
    {
        "active": false, // default: true
        "title": "BadQuiz - le quiz spécial ####",
        "description": "Êtes-vous éligible pour agrandir votre *****",
        "type": "test",                             // test|quiz
        "resultTypes": ["b", "v", "a"],             // types of results - default : [true, false]
        "labelType": "I",                           // a | 1 | I => alpha / numeric / latin
        "answerLabelType": "a",                     // a | 1 | I => alpha / numeric / latin
        "previewComponent": 'Quiz1Preview',         // preview component - default: null
        "questions": [                              // mandatory
            {
                "title": "Êtes-vous plutôt :",      // question main text
                "tip": "couilles, bite ou poils",   // additional information - default: ""
                "multiple": true,                   // default: false
                "answers": [
                    {                               // results and points (default: 1 point)
                        "results": {"b": 0, "v": 0, "a": 1},
                        "resultsNotChecked": {},    // default: 0
                        "text": "couilles",         // answer text
                    },
                    {
                        "results": {"b": 1, "v": 0, "a": 0},
                        "text": "bite",
                    },
                    {
                        "results": {"b": 0, "v": 1, "a": 0},
                        "text": "poils",
                    },
                    {
                        "results": {"b": 0, "v": 0, "a": 0},
                        "text": "aucun des 3",
                    }
                ],
                component: 'Quiz1Question'
            },
            {
                "title": "Vous avez :",
                "tip": "dans vos sous-vêtements",
                "multiple": true,
                "answers": [
                    {
                        "results": "b",
                        "text": "Une bite",
                    },
                    {
                        "results": "v",
                        "text": "Une vulve",
                    },
                    {
                        "results": "a",
                        "text": "Un anus",
                    },
                    {
                        "results": {"b": -2, "v": -1},
                        "text": "Une trompe",
                    },
                ]
            },
            {
                "title": "Votre activité préférée :",
                "tip": "",
                "answers": [
                    {
                        "results": "b",
                        "text": "JumbleSpeed avec une bite comme totem",
                    },
                    {
                        "results": "v",
                        "text": "Faire l'amour à un arbre",
                    },
                    {
                        "results": "a",
                        "text": "Visite de la fistinière",
                    },
                ]
            },
            {
                "title": "Si vous étiez un parasite :",
                "tip": "",
                "answers": [
                    {
                        "results": "b",
                        "text": "Un Tænia Saginata",
                    },
                    {
                        "results": "v",
                        "text": "Un Poussierus Capillaris",
                    },
                    {
                        "results": "a",
                        "text": "Un jAnus Castex",
                    },
                ]
            },
            {
                "title": "Votre citation favorite :",
                "tip": "",
                "answers": [
                    {
                        "results": "b",
                        "text": "On ne vérifie pas nos sources.",
                    },
                    {
                        "results": "v",
                        "text": "\"VIVIAN !!!\"",
                    },
                    {
                        "results": "a",
                        "text": "\"Quand tu baises un mort, mets une capote.\"",
                    },
                ]
            },

        ],
        "displayScore": false,
        // "displayCorrection": false, // default: false (true for quiz type)
        "results": [ // mandatory
            {
                "identifier": 1,
                "condition": () => true,
                "component": "Quiz1Result"
            }
        ]
    },
    {
        "title": "Avez-vous le BadNews Power ?",
        "description": "Testez avec ce quiz si vous avez le potentiel pour passer dans Bad News. Serez-vous" +
            " un jour le triste héros, ou la triste héroïne, d'une des truculentes actualités de Davy ?",
        "type": "quiz",
        "displayScore": false,
        labelType: "I",
        "previewComponent": 'Quiz1Preview',
        questions: [
            {
                "title": "Êtes-vous déjà resté(e) coincé(e) dans un sèche-linge lors d'une soirée arrosée ?",
                "tip": "espèce de bolosse",
                "answers": [
                    {
                        "results": 1,
                        "text": "oui",
                    },
                    {
                        "results": 0,
                        "text": "non, qui essaie de rentrer dans un appareil ménager ?",
                    }
                ]
            },
            {
                "title": "Avez-vous déjà demandé votre grand-mère en mariage ?",
                "tip": "Fais une pipe à pépé, avant qu'il ne la casse, une p'tite langue à mémé avant " +
                    "qu'elle ne trépasse (chanson d'Henri Tachan)",
                "answers": [
                    {
                        "results": 1,
                        "text": "oui, une fois au châlet",
                    },
                    {
                        "results": 0,
                        "text": "non",
                    }
                ]
            },
            {
                "title": "Vous êtes-vous déjà échappé(e) de prison... et si oui, comment et pourquoi ?",
                "tip": "Ne touchez pas 20'000F",
                "answers": [
                    {
                        "results": 0,
                        "text": "oui : je n'avais pas fini de découper ma belle-mère",
                    },
                    {
                        "results": 1,
                        "text": "oui : j'ai semé les forces de police à vélo pour trouver un CDI",
                    },
                    {
                        "results": 0,
                        "text": "non",
                    }
                ]
            },
            {
                "title": "Comment pimentez-vous votre vie sexuelle ?",
                "tip": "Si votre partenaire hurle ce n'est peut être pas de plaisir",
                "answers": [
                    {
                        "results": 1,
                        "text": "avec un vrai piment dans la chatte",
                    },
                    {
                        "results": 0,
                        "text": "je n'ai pas de vie sexuelle",
                    },
                    {
                        "results": 0,
                        "text": 'avec un sex-toy de chez © passage du désir',
                    }
                ]
            },
            {
                "title": "Quelle est la bonne attitude à adopter face à un castor renversé sur la route",
                "tip": "La vie secrète des SDF",
                "answers": [
                    {
                        "results": 0,
                        "text": "le mettre dans une petite couverture et lui apporter les premiers soins",
                    },
                    {
                        "results": 0,
                        "text": "appeler les secours",
                    },
                    {
                        "results": 1,
                        "text": 'le violer, pardi !',
                    }
                ]
            },
            {
                "title": "Vous êtes-vous déjà immolé(e) ?",
                "tip": "Ne pas confondre PMU et Monsieur Bricolage",
                "answers": [
                    {
                        "results": 0,
                        "text": "par le feu ? non",
                    },
                    {
                        "results": 0,
                        "text": "oui, après m'être aspergé(e) d'alcool à brûler",
                    },
                    {
                        "results": 1,
                        "text": "oui, après m'être aspergé(e) de rosé",
                    }
                ]
            },
            {
                "title": "La meilleure méthode de contraception :",
                "tip": "Tips de jeunes",
                "answers": [
                    {
                        "results": 0,
                        "text": "Le préservatif",
                    },
                    {
                        "results": 1,
                        "text": "La cigarette, car fumer rend stérile",
                    },
                    {
                        "results": 0,
                        "text": "Couper la bite",
                    }
                ]
            },
            {
                "title": "Comment soigner son mal de dos ?",
                "tip": "Champion du monde",
                "answers": [
                    {
                        "results": 0,
                        "text": "En allant voir un spécialiste",
                    },
                    {
                        "text": "En faisant des étirements",
                        "results": 0,
                    },
                    {
                        "results": 1,
                        "text": "En s'injectant son propre sperme dans le bras",
                    }
                ]
            },
            {
                "title": "Comment faire disparaître un corps ?",
                "tip": "Gros morceau",
                "answers": [
                    {
                        "results": 0,
                        "text": "En demandant un coup de main à David Copperfield",
                    },
                    {
                        "results": 1,
                        "text": "En le jetant dans les toilettes après l'avoir passé au mixeur",
                    },
                    {
                        "results": 0,
                        "text": "En l'enterrant sous le gazon de la gendarmerie",
                    }
                ]
            }
        ],
        "results": [
            {
                "identifier": 1,
                "condition": () => true,
                "component": "Quiz2Result"
            }
        ]
    }
]
