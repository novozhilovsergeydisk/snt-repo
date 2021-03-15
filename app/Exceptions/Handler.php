<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {

//        $statusCode = $this->getStatusCode($e);
//
//        if ($request->wantsJson()) {
//            return response()->json(['message' => $this->getMessage($e)], $statusCode);
//        }

        // в режиме отладки выводим все ошибки как есть
//        if (config('app.debug')) {
//            return parent::render($request, $e);
//        }
//
//        // если это потомок \Symfony\Component\HttpKernel\Exception\HttpException
//        if ($this->isHttpException($exception)) {
//            return $this->renderHttpException($e);
//        }

        // иначе показываем стандартную страницу ошибки
//        return response()->view('errors.500', [], 500);

//        $result = parent::render($request, $exception);
//
//        if ($result) {
//            return redirect()->back()->with('errors', ' Возникла ошибка при загрузке ведомости. '."\n".'Код ошибки: '.$exception->getCode()."\n".'. Файл: '.$exception->getFile()."\n".'. Строка: '.$exception->getLine());
//
//        }


//        return trans('main.something_wrong');


//        $e = $this->prepareException($exception);
//
//        if ($e instanceof HttpResponseException) {
//            return $e->getResponse();
//        } elseif ($e instanceof AuthenticationException) {
//            return $this->unauthenticated($request, $e);
//        } elseif ($e instanceof ValidationException) {
//            return $this->convertValidationExceptionToResponse($e, $request);
//        }
//
//        dump($e);
//
//        return $e->getMessage();
//        return parent::render($request, $exception);

//        if (method_exists($exception, 'render') && $response = $e->render($request)) {
//            dump('1');
//            return;
////            return Router::toResponse($request, $response);
//        } elseif ($exception instanceof Responsable) {
//            dump('2');
//            return;
////            return $e->toResponse($request);
//        }


//        $e = $this->prepareException($exception);

//        if ($e instanceof FatalErrorException) {
//            dump($exception);
//        }

//        if ($e instanceof HttpResponseException) {
//            dump('4');
//            return;
////            return $e->getResponse();
//        } elseif ($e instanceof AuthenticationException) {
//            dump('5');
//            return;
////            return $this->unauthenticated($request, $e);
//        } elseif ($e instanceof ValidationException) {
//            dump('6');
//            return;
////            return $this->convertValidationExceptionToResponse($e, $request);
//        }

//        dump('7');

//        $excn = $request->expectsJson()
//            ? $this->prepareJsonResponse($request, $e)
//            : $this->prepareResponse($request, $e);

//        dump($excn);



//        $request->expectsJson()
//            ? $this->prepareJsonResponse($request, $e)
//            : $this->prepareResponse($request, $e);
//
//        dump($request);
//
//        return;

        return parent::render($request, $exception);
    }
}
