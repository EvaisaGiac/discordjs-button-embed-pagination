import {EmojiIdentifierResolvable, MessageButtonStyleResolvable, ButtonInteraction} from "discord.js";
import {MessageButtonStyles} from "discord.js/typings/enums";

export interface ButtonOption {
    emoji?: EmojiIdentifierResolvable;
    label?: string;
	callback?: (interaction: ButtonInteraction) => void;
    style: Exclude<MessageButtonStyleResolvable, 'LINK' | MessageButtonStyles.LINK>;
}