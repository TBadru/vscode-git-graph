import {
    GitCommandStatus as GitCommandStatusX,
    GitCommitNode as GitCommitNodeX,
    GitGraphViewSettings as GitGraphViewSettingsX,
    GitResetMode as GitResetModeX,
    RequestMessage as RequestMessageX,
    ResponseMessage as ResponseMessageX
} from "../out/types";

declare global {
    type GitCommandStatus = GitCommandStatusX;
    type GitCommitNode = GitCommitNodeX;
    type GitGraphViewSettings = GitGraphViewSettingsX;
    type GitResetMode = GitResetModeX;
    type RequestMessage = RequestMessageX;
    type ResponseMessage = ResponseMessageX;
}