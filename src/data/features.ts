import { Zap, Heart, Coffee, Smile, Hammer, House, Umbrella, HousePlus} from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Hammer,
                title: 'Renovations',
                description: 'We have extensive experience in everything from single-room to large-scale, full-home renovations and we are able to tackle any job, no matter how complex it is.'
            },
            {
                icon: HousePlus,
                title: 'Extensions',
                description: 'We understand that what you need from your house changes as your life does. We are experts at working with you to seamlessly integrate extensions and alterations into existing structures on even the most difficult sites.'
            },
            {
                icon: Umbrella,
                title: 'Outdoor Constructions',
                description: 'We can help you make the most of the Sydney views and your outdoor lifestyle with custom-designed decks, pergolas, and entertainment areas.'
            },
            {
                icon: House,
                title: 'New Builds',
                description: 'We\'re also more than happy to assist with new build projects too, be it a granny flat or a family home.'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
