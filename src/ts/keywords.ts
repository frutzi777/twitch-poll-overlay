export interface Reaction {
    sorting: number;
    display: string;
    keywords: string[];
}

const reactions: Reaction[] = [
    { 
        sorting: 0,
        display: "+1",
        keywords: [
            "+1", "1", "yes", "ye", "ja"
        ]
    },
    {
        sorting: 2,
        display: "~",
        keywords: [
            "2", "wtf"
        ]
    },
    {
        sorting: 3,
        display: "-1",
        keywords: [
            "-1", "0", "no", "nein"
        ]
    }
];

export function getReactionByKeyword(keyword: string): Reaction {
    keyword = keyword.toLowerCase();

    for (let i: number = 0; i < reactions.length; i++) {
        const reaction: Reaction = reactions[i];
        for (let j: number = 0; j < reaction.keywords.length; j++) {
            if (reaction.keywords[j] == keyword) {
                return reaction;
            } 
        }
    }
    
    return null;
}

export {
    reactions
}