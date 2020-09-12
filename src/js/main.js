import $ from './lib/lib';

// $('#first').on('click', () => {
//     $('div').eq(1).fadeToggle(800);
// });

// $('[data-count="second"]').on('click', () => {
//     $('div').eq(2).fadeToggle(800);
// });

// $('button').eq(2).on('click', () => {
//     $('.w-500').fadeToggle(800);
// });

// $('wrap').html(
//     `
//         <div class="dropdown">
//                 <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//                 <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//                     <a href="#" class="dropdown-item">Action#1</a>
//                     <a href="#" class="dropdown-item">Action#2</a>
//                     <a href="#" class="dropdown-item">Action#3</a>
//             </div>
//         </div>
//     `
// );
// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal(
    {
        txtTitle: 'Modal Title',
        txtContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. reprehenderit aperiam qui aliquam!',
        btnCount: 3,
        btnSettings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save Changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another Btn',
                ['btn-warning', 'ml-10'],
                false,
                ()=> {
                    alert('Hello World');
                }
            ]
        ]
    }
));


$().get('http://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res));