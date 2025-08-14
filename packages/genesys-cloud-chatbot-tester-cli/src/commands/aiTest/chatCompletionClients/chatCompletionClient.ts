export interface PreflightError {
  reasonForError: string;
  ok: false;
}

export interface PreflightSuccess {
  ok: true;
}

export type PreflightResult = PreflightError | PreflightSuccess;

export interface CustomerUtterance {
  role: 'customer';
  content: string;
}

export interface BotUtterance {
  role: 'bot';
  content: string;
}

export type Utterance = CustomerUtterance | BotUtterance;

export interface ChatCompletionClient {
  getProviderName(): string;
  predict(
    context: string,
    history: Utterance[],
    customerMessage: Utterance | null,
  ): Promise<Utterance | null>;
  preflightCheck(): Promise<PreflightResult>;
}
