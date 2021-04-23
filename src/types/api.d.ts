declare type Code = 'OK' | 'PENDING' | 'BAD_FORMAT' | 'BAD_DATA';

/**
 * @see [Confluence](https://optisantis.atlassian.net/wiki/spaces/PA/pages/795934758/Format+du+retour+des+APIs#Message-traduisibile)
 */
declare type TranslatableMessage = {
    /**
     * An unique id for the error
     * @see https://www.uuidgenerator.net/version1
     */
    code: string;

    /**
     * An english message, that will need translation
     */
    message: string;

    /**
     * The name of the field who has an error.
     * If no field exist in the payload or no errors are returned, this key does not exists
     */
    field?: string;

    /**
     * Values to help translating the message above, exists only if the translation needs parameters
     */
    parameters?: Record<string, string | number | boolean>;
};

/**
 * @see [Confluence](https://optisantis.atlassian.net/wiki/spaces/PA/pages/795934758/Format+du+retour+des+APIs)
 */
declare type Api<Data, Extra = null, Meta = Record<string, unknown>> = {
    /**
     * An informative code for the result of the api call
     */
    code: Code;

    /**
     * An english message, that should not be used in front.
     */
    message: string;

    /**
     * An array of translatable messagesthat describe each errors on the data provided when calling the api
     */
    errors?: TranslatableMessage[];

    /**
     * This parameter exists only when `errors` is defined.
     * It contains any informations needed to help debug the errors
     *
     * Some values are always present like `pagination` for example
     */
    meta?: Meta;

    /**
     * - `null` if no data are available
     * @defaultValue `null`
     */
    data?: Data | null;

    /**
     * Gives additional informations on `dev` environment only
     * @defaultValue `null`
     */
    extra?: Extra;
};

declare type Pagination = {
    start: number;
    count: number;
    totalCount: number;
};
