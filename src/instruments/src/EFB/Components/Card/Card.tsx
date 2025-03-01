/*
 * A32NX
 * Copyright (C) 2020-2021 FlyByWire Simulations and its contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import classNames from 'classnames';

type CardProps = {
    title?: string,
    childrenContainerClassName?: string
};

const Card: React.FC<CardProps> = ({ title, childrenContainerClassName = '', children, ...props }) => (
    <div {...props}>
        {!!title && <h1 className="text-white font-medium mb-4 text-2xl">{title}</h1>}

        <div className={classNames(['bg-gray-800 rounded-xl p-6 text-white shadow-lg', childrenContainerClassName])}>
            {children}
        </div>
    </div>
);

export default Card;
