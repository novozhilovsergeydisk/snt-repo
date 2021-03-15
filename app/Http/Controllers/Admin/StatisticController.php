<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//use League\Csv\Reader;
//use League\Csv\Statement;
//use League\Csv\CharsetConverter;
//use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Exceptions\PostTooLargeException;

use Illuminate\Support\Facades\Hash;
use App\User;
use App\Client;
use Illuminate\Support\Facades\DB;
use App\Aef;
use Illuminate\Support\Facades\Auth;
use App\Dealing;

//use Illuminate\Support\Facades\DB;

//use League\Csv\Reader;
//use League\Csv\Writer;

class StatisticController extends Controller
{
//	protected $ipsum = 'perspic piciatis perspiciatis, unde omnis iste natus error sit volupta accusan dolorem dantium, totamu aperiam, quallo invento veritat ritatis etquasi hitecto beatit ditasun, explica. Nemenim ipsamvo lupatem, voluptas sit, asperat autodit autfugi, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat Abusus tollit usum Accepto damno Accessio cedit principali bonae fidei Actio factum concepta. Actio concepta personam noxalis poenalis Alibi potiori Argumenta ponderantur numerantum Argumentum oculos Dionysius Maior, Siciliae tyrannus, ipse iudicavit, quam esset beatus. Nam, cum quidam ex eius assentatoribus, commemoraret in sermone copias eius, opes, maiestatem dominatus, rerum abundantiam, magnificentiam aedium regiarum negaretque unquam beatiorem quemquam fuisse proxima igitur,—inquit—о Damocle, quoniam te haec vita delectat, ipse eam degustare et fortunam experiri meam?» Cum se ille cupere dixisset, collocari iussit hominem in aureo lecto, strato pulcherrimo textili stragulo, magnificis operibus picto, abacosque complures ornavit argento auroque caelato2. Tum ad mensam eximia forma pueros delectos iussit consistere eosque, nutum illius intuentes diligenter ministrare. Aderant unguenta, coronae3; incendebantur odores4; mensae conquisitissimis epulis exstruebantur.5 Fortunatus sibi Damocles videbatur. In hoc medio apparatu6 fulgentem gladium e lacunari saeta equina aptum demitti iussit, ut impenderet illius beati cervicibus. Itaque nec pulchros illos ministratores aspiciebat, nec plenum artis argentum7, nec manum porrigebat in mensam, iam ipsae defluebant coronae8. Denique exoravit tyrannum, ut abire liceret, quod iam beatus nollet esse. Satisne videtur declaravisse Dionysius, nihil esse ei beatum, cui semper aliqui terror impendeat';
	
	public function get()
	{
//		return view('admin.upload-files', ['upload_active' => 'active']);
	}
	
	public function set($iser_id)
	{
//		return view('admin.upload-files', ['upload_active' => 'active']);
	}
}